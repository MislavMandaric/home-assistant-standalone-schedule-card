# Standalone Schedule Card

[![GitHub Release][releases-shield]][releases]
[![GitHub Activity][commits-shield]][commits]
[![License][license-shield]][license]

[![pre-commit][pre-commit-shield]][pre-commit]
[![Black][black-shield]][black]

[![hacs][hacs-shield]][hacs]
[![Project Maintenance][maintainer-shield]][maintainer]

[![Community Forum][forum-shield]][forum]

## Options

Since this card is a fork of the original [scheduler-card](https://github.com/nielsfaber/scheduler-card), all of the options, features and constrains are valid for this card as well.

### Additional options

The only difference between the original card and this one is one additional option in the config, which allows the card to use **any** backend and not just [scheduler-component](https://github.com/nielsfaber/scheduler-component).

| Name              | Type    | Requirement  | Description                                                                | Default     |
| ----------------- | ------- | ------------ | -------------------------------------------------------------------------- | ----------- |
| backend_platform  | string  | **Optional** | Which platform to use in the backend, to handle storage of scheduler data. | `scheduler` |

## Installation

### HACS (recommended)

1. Open HACS
1. Search for "Standalone Schedule Card"
    1. If it doesn't exist yet, you first need to add `https://github.com/MislavMandaric/lovelace-standalone-schedule-card` as custom repository
1. Click "Install this repository in HACS"
1. Hard reload your browser
1. In the HA UI enter the edit mode of any of your Lovelace dashboards and add new custom card called `custom:scheduler-card`

### Manual

1. Using the tool of choice open the directory (folder) for your HA configuration (where you find `configuration.yaml`)
1. If you do not have a `www` directory (folder) there, you need to create it
1. In the `www` directory (folder) create a new folder called `lovelace-standalone-schedule-card`
1. Download _all_ the files from the `dist/` directory (folder) in this repository
1. Place the files you downloaded in the new directory (folder) you created
1. In the HA UI go to "Configuration" -> "Lovelace Dashboards" -> "Resources" click "+" and add URL `/local/lovelace-standalone-schedule-card/standalone-schedule-card.js`
1. Hard reload your browser
1. In the HA UI enter the edit mode of any of your Lovelace dashboards and add new custom card called `custom:scheduler-card`

## Configuration is done in the UI

<!---->

## Contributions are welcome!

If you want to contribute to this please read the [Contribution guidelines](CONTRIBUTING.md)

## Credits

Code template was mainly taken from [@iantrich](https://github.com/iantrich)'s [boilerplate-card](https://github.com/custom-cards/boilerplate-card) template.

This card is a fork of [@nielsfaber](https://github.com/nielsfaber)'s original [scheduler-card](https://github.com/nielsfaber/scheduler-card).


[maintainer]: https://github.com/MislavMandaric
[maintainer-shield]: https://img.shields.io/badge/maintainer-%40MislavMandaric-blue.svg?style=for-the-badge

[releases]: https://github.com/MislavMandaric/lovelace-standalone-schedule-card/releases
[releases-shield]: https://img.shields.io/github/release/MislavMandaric/lovelace-standalone-schedule-card.svg?style=for-the-badge

[commits]: https://github.com/MislavMandaric/lovelace-standalone-schedule-card/commits
[commits-shield]: https://img.shields.io/github/commit-activity/y/MislavMandaric/lovelace-standalone-schedule-card.svg?style=for-the-badge

[license]: https://github.com/MislavMandaric/lovelace-standalone-schedule-card/blob/master/LICENSE
[license-shield]: https://img.shields.io/github/license/MislavMandaric/lovelace-standalone-schedule-card.svg?style=for-the-badge

[hacs]: https://hacs.xyz
[hacs-shield]: https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge

[forum]: https://community.home-assistant.io/
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge

[black]: https://github.com/psf/black
[black-shield]: https://img.shields.io/badge/code%20style-black-000000.svg?style=for-the-badge

[pre-commit]: https://github.com/pre-commit/pre-commit
[pre-commit-shield]: https://img.shields.io/badge/pre--commit-enabled-brightgreen?style=for-the-badge
