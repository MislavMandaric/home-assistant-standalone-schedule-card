import { HomeAssistant, fireEvent } from "custom-card-helpers";
import { CardConfig, Schedule, ScheduleConfig, TagEntry } from "../types";
import { fetchScheduleEventType, fetchScheduleItemEventType, saveScheduleEventType, editScheduleEventType, deleteScheduleEventType, fetchTagsEventType } from "./api_event_types";
import { html, TemplateResult } from 'lit';

export const fetchSchedules = (hass: HomeAssistant, config: CardConfig | null | undefined): Promise<Schedule[]> =>
  hass.callWS({
    type: fetchScheduleEventType(config),
  });

export const fetchScheduleItem = (hass: HomeAssistant, config: CardConfig | null | undefined, schedule_id: string): Promise<Schedule> =>
  hass.callWS({
    type: fetchScheduleItemEventType(config),
    schedule_id: schedule_id
  });

export const saveSchedule = (hass: HomeAssistant, config: CardConfig | null | undefined, schedule_config: ScheduleConfig): Promise<boolean> =>
  hass.callApi(
    "POST",
    saveScheduleEventType(config),
    schedule_config
  );

export const editSchedule = (hass: HomeAssistant, config: CardConfig | null | undefined, schedule_config: ScheduleConfig & { schedule_id: string }): Promise<boolean> =>
  hass.callApi(
    "POST",
    editScheduleEventType(config),
    schedule_config
  );

export const deleteSchedule = (hass: HomeAssistant, config: CardConfig | null | undefined, schedule_id: string): Promise<boolean> =>
  hass.callApi(
    "POST",
    deleteScheduleEventType(config),
    { schedule_id: schedule_id }
  );

export const fetchTags = (hass: HomeAssistant, config: CardConfig | null | undefined): Promise<TagEntry[]> =>
  hass.callWS({
    type: fetchTagsEventType(config),
  });

export function showErrorDialog(target: HTMLElement, error: string | TemplateResult) {
  fireEvent(target, 'show-dialog', {
    dialogTag: 'dialog-error',
    dialogImport: () => import('../components/dialog-error'),
    dialogParams: { error: error }
  });
}

export function handleError(err: { body: { message: string }, error: string }, el: HTMLElement) {
  let errorMessage = html`
    <b>Something went wrong!</b><br>
    ${err.body.message}<br><br>
    ${err.error}<br><br>
    Please <a href="https://github.com/nielsfaber/scheduler-card/issues">report</a> the bug.
  `;
  showErrorDialog(el, errorMessage);
}