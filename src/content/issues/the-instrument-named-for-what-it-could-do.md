---
bar: 1
title: The instrument named for what it could do
date: 2026-12-06
dek: Around 1700, an instrument keeper in Florence built a keyboard you could play quietly or loudly just by changing how hard you pressed. We still call it by that trick.
status: draft
homeNote: "p = piano, soft\nf = forte, loud"
imageNeeded: Cristofori's 1720 piano, from The Met's open-access collection (public domain)
pianoglass:
  month: November 2026
  body:
    - "Most of November went into the few seconds around actually playing. The count-in now counts whole beats from the start of a beat, and a row of dots fills in before the 3, 2, 1. If you pause and come back, the song rewinds a little and the metronome counts you back in while a circle runs down."
    - "Wait mode got stricter. It used to take a note you played way too early; now anything more than half a second early counts as wrong. And when the app asks you to recenter, it shows the controller with only the Meta button glowing, so you don't have to guess which one to hold."
  clipNeeded: the new count-in and resume, filmed through the headset
  next: "[what you're building in December]"
sources:
  - "Scipione Maffei, “Nuova invenzione d'un gravecembalo col piano, e forte,” <i>Giornale de' letterati d'Italia</i> 5 (1711)."
  - "Stewart Pollens, <i>The Early Pianoforte</i> (Cambridge University Press, 1995)."
  - "The Metropolitan Museum of Art, <i>Grand Piano</i>, Bartolomeo Cristofori, 1720 (89.4.1219)."
---

<!-- TODO before publishing: check every fact against the sources, add the image and the clip, and grow the story to about 1,000 words. -->

## A harpsichord can't whisper

<aside class="note">pluck = same volume,
every time</aside>

Before the piano, the keyboard most people played was the harpsichord. Press a
harpsichord key and a small quill plucks the string. It doesn't matter much how
hard you press. The pluck comes out about the same, so every note does too.

If a harpsichordist wanted more sound, they added strings or moved to a second
keyboard. Their fingers couldn't do it.

## Hammers instead of quills

Bartolomeo Cristofori looked after the instruments of Prince Ferdinando de'
Medici in Florence. Around 1700 he built a keyboard where each key threw a small
hammer at the string instead of plucking it. Press lightly and the hammer moves
slowly, and you get a soft note. Press hard and it's loud.

<aside class="note">the hammer "escapes"
the string</aside>

The tricky part was getting the hammer back out of the way. If it stayed against
the string, it would kill the sound right away. Cristofori's fix, the
escapement, lets the hammer fly free just before it hits, so it bounces off and
the string keeps ringing. Pianos still work this way.

<aside class="note">p = piano, soft
f = forte, loud</aside>

> "gravicembalo col piano e forte"
>
> A harpsichord with soft and loud. Scipione Maffei, 1711.

## The name got shorter

In 1711 the writer Scipione Maffei described the new instrument in a Venetian
journal. He called it a *gravicembalo col piano e forte*, a harpsichord with soft
and loud. People shortened that to *pianoforte*, and then just *piano*. So the
word we use means "soft," which is half of the one thing a harpsichord couldn't
do.

<aside class="note">1720 New York
1722 Rome
1726 Leipzig</aside>

Three of Cristofori's pianos still exist. They're dated 1720, 1722 and 1726, and
they're in New York, Rome and Leipzig.

## From hammer to number

<aside class="note">1 = barely touched
127 = as hard as it goes</aside>

A digital keyboard has the same job Cristofori's hammer had. It has to notice
how hard you played. When it sends a note over MIDI, the message includes a
number from 1 to 127 for how fast the key went down.

That's how PianoGlass hears me play. My keyboard plugs into the headset with a
USB cable, and every key press shows up as one of these messages: which note,
when, and how hard. Next month is about the "when."
