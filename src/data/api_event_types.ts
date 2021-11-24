import { CardConfig } from "../types";

export const fetchScheduleEventType = (config: CardConfig | null | undefined): string => config?.backend_platform || "scheduler"

export const fetchScheduleItemEventType = (config: CardConfig | null | undefined): string => `${config?.backend_platform || "scheduler"}/item`

export const saveScheduleEventType = (config: CardConfig | null | undefined): string => `${config?.backend_platform || "scheduler"}/add`

export const editScheduleEventType = (config: CardConfig | null | undefined): string => `${config?.backend_platform || "scheduler"}/edit`

export const deleteScheduleEventType = (config: CardConfig | null | undefined): string => `${config?.backend_platform || "scheduler"}/remove`

export const fetchTagsEventType = (config: CardConfig | null | undefined): string => `${config?.backend_platform || "scheduler"}/tags`

export const scheduleUpdatedEventType = (config: CardConfig | null | undefined): string => `${config?.backend_platform || "scheduler"}_updated`
