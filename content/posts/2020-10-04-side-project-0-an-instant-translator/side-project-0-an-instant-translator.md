---
title: "Side project #0 – An instant translator"
date: 2020-10-04
slug: side-project-0-an-instant-translator
cover: ./instant translator in action.png
description: Things I learned from my first "successful-yet-failed" side project
tags: ['Side Projects', 'Lessons Learned']
---

“Read a children’s book in Chinese every week day” – it’s written on my 2020 plan. So I’ve been trying to do exactly that for the last half year though only finished 2 stories. And they were not even that long. Each had roughly 2 pages. But don’t forget the wording of my plan. It explicitly said “every week day” and didn’t mention anything about how long or how much I should read. This process-oriented approach saves me from stress if I used goal-oriented approach like “I’m gonna read 10 Chinese book this year can’t keep up with . 
So, I’m trying to learn Chinese inch-by-inch, literally. 

Besides reading, I incorporated some spaced-repetition into the routine. 
My reading would on go on like this: 
1.	Try to read a sentence and if there’s any new word or expression I don’t understand, look them up on Google Translate
2.	Copy the new word/expression into Anki and create a new card with it.
3.	Copy the translation and the romanization (pinyin) into the back of the card.
4.	Download the pronunciation of the word by using a text-to-speech converter (such as https://soundoftext.com/) and attach it to the card. 
5.	Repeat 1 → 4 with a new word from the sentence.

A lot, right? Just reading a single sentence would require me to go back and forth between 3 different applications. The joy of reading would soon fade away with this kind of excessive task-switching. So I figured it will be great if I build a single tool that can do all of these automatically. 
The first step was finding a suitable translation API (possibly, for free). I was surprised that there were only few options available for me: Google Cloud Translation API, and its Microsoft equivalent MS Azure Translator. 
Then I decided on where to deploy the back-end and front-end. At my work, I was using serverless to deploy my back-end services to AWS Lambda while leveraging serverless Finch plugin to deploy the front-end to AWS S3 bucket. So in order to save time, I chose same environment for this project too.
The functionality was simple. It just had to call different APIs for different kinds of translations and had some buttons for downloading the generated speech and copying the translated texts. But, god, it took me a few weekends to write it because I was only able to chisel out some hour or so for this each time.

Then the outcome was somewhat sluggish as you can see. Well, I didn’t even try to make the UX better because it was a prototype. And translation from those 2 services were not top-notch too. 

Still too much manual operations are required. 

Then I remembered that I had purchased a superb Chinese dictionary called HangPing Dictionary. Turned out it had the exact feature I wanted from the beginning, syncing new words (their romanization and their pronunciation too) into Anki!

A problem solved!
