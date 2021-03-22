## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)

## General info

  <img src="/home/sarah/courses/fwd-advanced/projects/NLP/src/client/assets/screenshot.jpeg">

This project is a Sentiment Analyzer for performing a detailed multilingual sentiment analysis of texts from different sources.

The text provided is analyzed to determine if it expresses a positive/negative/neutral sentiment; to do this, the local polarity of the different sentences in the text is identified and the relationship between them evaluated, resulting in a global polarity value for the whole text.

Besides polarity at sentence and global level, Sentiment Analysis uses advanced natural language processing techniques to also detect the polarity associated to both entities and concepts in the text. It provides a reference in the relevant sentence and a list of elements detected with the aggregated polarity derived from all their appearances, also taking into account the grammatical structures in which they are contained.

## Technologies

Project is created with:

- Lorem version: 12.3
- Ipsum version: 2.33
- Ament library version: 999

## Setup

To run this project, install it locally using npm:

```
$ cd ../lorem
$ npm install
$ npm start
```
