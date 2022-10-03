from flair.models import SequenceTagger
from flair.data import Sentence


model = SequenceTagger.load('D:\\trained_flair_model\\best-model.pt')


def model_predict(text: str):
    sentence = Sentence(text)
    model.predict(sentence)
    result = sentence.to_tagged_string()
    return result

