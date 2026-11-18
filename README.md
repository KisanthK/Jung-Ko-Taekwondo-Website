# Jung Ko Taekwondo Academy — website redesign

A redesign concept for [Jung Ko Taekwondo Academy](https://www.jungko.com/) in Thornhill, Ontario.
Plain HTML, CSS and JavaScript with no build step or dependencies.

## Structure

```
index.html        Page markup
css/styles.css    All styles (mobile-first breakpoints at 900px, 760px and 400px)
js/main.js        Interactions
```

## Sections

Hero with age picker · key facts · About · Programs · Why families choose Jung Ko · Path to black belt ·
Grandmaster Ko · Instructors · Class schedule · Reviews · Camps and parties · Free trial and FAQ · Visit

## Updating content

Most content is in `index.html`. Two sections are generated from data in `js/main.js`:

- **Instructors**: edit the `T` array. Each entry has a group (`lead`, `tkd` or `kendo`), name, role,
  rank, photo, highlight tags and credentials. An entry with an `x` description shows as a large card.
- **Class schedule**: edit the `CLASSES` array. Each line is
  `C(days, start, end, name, detail, level, program)`. Days are numbers (0 = Sunday, 1 = Monday … 6 = Saturday),
  times are 24-hour (`'15:40'`), levels are keys of `LV` (for example `wy` = White to Yellow),
  and programs are `tots`, `junior`, `teen`, `black`, `private`, `comp` or `open`.

## Notes before going live

- Images load from the academy's current Wix media library. Download and host them with the site before
  moving off Wix, or they will stop loading.
- The free trial form opens the visitor's email app with the request filled in. Connect it to a booking
  system (for example Wix Bookings or Gymdesk) for real online booking.
- Content comes from jungko.com and public review sites, checked November 2026.

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```
