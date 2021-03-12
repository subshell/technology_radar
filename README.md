# subshell Technology Radar

A static site generator for the subshell Technology Radar based on the AOE Technology Radar: https://github.com/AOEpeople/aoe_technology_radar

## Use and build

Add the tech radar as a dependency
```
yarn add https://github.com/subshell/technology_radar.git
```

Build the radar
```
yarn aoe_technology_radar
```

Serve
```
cd build
python3 -m http.server 8080
```
Then open here: http://localhost:8080

## Run a prepared static version

In most cases you have the techradar available at `/techradar`, and for reasons want all correct pages to be accessable.

Until this setup improves, you can use the following way to generate the correct techradar:

```
PUBLIC_URL=techradar/ yarn aoe_technology_radar
yarn aoe_technology_radar-static
cp -r build techradar
```

(This is rather workaroundish for now, but does the job.)

## Usage

For a new Technology Radar release, create a folder of the release date
(YYYY-MM-DD) under `/radar`. In each release folder create a folder for every
quadrant and place the items there.

### Maintaining items

The items are written in Markdown format (.md)

Each file has a [front-matter](https://github.com/jxson/front-matter) header
where the attributes of the item are listed:

```
---
title:      "React"
ring:       established
quadrant:   languages
---

Text goes here. You can use **markdown** here.
```

Following front-matter attributes are possible:

* **title**: Name of the Item
* **quadrant**: Quadrant. One of `languages`,
  `frameworks-and-libraries`, `cloud`, `tools`
* **ring**: Ring section in radar. One of `established`, `trial`, `assess`, `hold`, `deprecated`
* **info**: (optional) A short textual description of the item (visible in
  overview pages)
* **featured**: (optional, default "true") If you set this to `false`, the item
  will not be visible in the radar quadrants but still be available in the overview.

The name of the .md file acts as item identifier and may overwrite items with
the same name from older releases.

If an item is overwritten in a new release, the attributes from the new item are
merged with the old ones and a new history entry is created for that item.
