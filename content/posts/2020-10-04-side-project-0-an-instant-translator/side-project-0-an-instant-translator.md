---
title: "Side project #0 – An instant translator"
date: 2020-10-04
slug: side-project-0-an-instant-translator
cover: ./instant translator in action.png
description: Things I learned from my first "successful-yet-failed" side project
tags: ['Side Projects', 'Lessons Learned']
---

*“Read children’s books in Chinese every week day”* – it’s written on my 2020 plan. I’ve been trying to do exactly that for the last 9 months. However, I’ve only managed to finish 3 stories - none of which were that long at roughly 2 pages each.  

But, don’t forget the wording of my plan. It explicitly said, *“every week day”* and didn’t mention anything about how long or how much I should read. This process-oriented approach saves me from stress of underperforming. if I had used a goal-oriented approach like, *“Read 10 children’s book in Chinese”*, it would have been an unreachable goal that forever loomed over me. 

Therefore, in-essence, I’m trying to learn Chinese inch-by-inch. Literally.

Besides just reading, I tried incorporating some spaced repetition into the routine by using the famous [Anki app](https://apps.ankiweb.net/).

My reading would go on like this: 
1.	Try to read a sentence and if there’s any new word or expression I don’t understand, look them up on Google Translate
2.	Copy the new word/expression into Anki and create a new card with it.
3.	Copy the translation and the romanization ([pinyin](https://en.wikipedia.org/wiki/Pinyin)) into the back of the card.
4.	Download the pronunciation of the word by using a text-to-speech converter (such as https://soundoftext.com/) and attach it to the card. 
5.	Repeat 1 → 4 with a new word from the sentence.

<Embed
  src="https://www.youtube.com/embed/a0j66ggDP6U"
/>

A lot, right? Just reading a single sentence would require me to go back and forth between 3 different applications. The joy of reading would soon fade away with this kind of excessive task-switching. So, I figured it would be great if I built a single tool that could do all of these elements automatically. 

The first step was finding a suitable translation API (ideally, for free). I was surprised that there was only a few options available for me: [Google Cloud Translation API](https://cloud.google.com/translate), and its Microsoft equivalent [MS Azure Translator](https://azure.microsoft.com/en-us/services/cognitive-services/translator/).

I then decided on where to deploy the back-end and front-end. At my work, I've been using serverless to deploy my back-end services to [AWS Lambda](https://aws.amazon.com/lambda/) while deploying the front-end to [Netlify](https://www.netlify.com/). In order to save time, I choose the same environment for this project too.

The functionality was simple. It just had to call different APIs for different kinds of translations and have some buttons for downloading the generated speech and copying the translated texts. But, god, it took me multiple weekends to write it because I was only able to chisel out a few hours or so each time.

<Embed
  src="https://www.youtube.com/embed/B6sqob5SUv0"
/>

However, after all of that work - the outcome was somewhat sluggish. The UX was poor (although it was a prototype so it didn’t really matter) and the translation itself via the 2 connected services was sub-optimal (compared to some other dedicated online dictionaries). Therefore, despite achieving a 20 → 30% time saving on the overall task, there was still too much manual input required to really use at scale.  

Strangely, I then remembered that I had purchased a superb Chinese dictionary called [HangPing Dictionary](https://play.google.com/store/apps/details?id=com.embermitre.hanping.app.pro&hl=en_US) a few years ago. Turned out it had the exact feature I wanted from the beginning, syncing new words (their romanization and their pronunciation too) into Anki automatically once you just click on bookmark button!

<Embed
  src="https://www.youtube.com/embed/LaIMcODZXNE"
/>

A problem solved!

I still think the simple tool I created might be useful for my French/Russian learning journey. We shall see…
