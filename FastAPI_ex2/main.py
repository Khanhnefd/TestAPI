from fastapi import FastAPI, Form, Request
from flair.models import SequenceTagger
from flair.data import Sentence
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from predict import model_predict


app = FastAPI(title='Test Flair trained model')
app.mount("/static", StaticFiles(directory="../Static"), name="static")

templates = Jinja2Templates(directory='../Templates')

@app.get('/ex2/api/flair_ner/predict')
async def home_page(request: Request):
    context = {'request': request, 'sentence': ''}
    return templates.TemplateResponse('ex2.html', context)

@app.post('/ex2/api/flair_ner/predict')
async def predict_ner(request: Request, sentence: str = Form()):
    result = model_predict(sentence)
    context = {'request': request, 'sentence': result}
    return templates.TemplateResponse('ex2.html', context)
