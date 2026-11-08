export type GroupFormField = 'name' | 'email' | 'city' | 'province' | 'about';

export type GroupFormValues = Record<GroupFormField, string>;

export interface GroupFormState {
    status: 'idle' | 'error' | 'success';
    errors: Partial<Record<GroupFormField, string>>;
    // Echoed back on error so the fields keep what the person typed
    values: Partial<GroupFormValues>;
    // Counts submissions; the form remounts on each so its fields pick up the echoed values
    attempt: number;
}

export const initialGroupFormState: GroupFormState = {
    status: 'idle',
    errors: {},
    values: {},
    attempt: 0,
};

export const groupFormFields: GroupFormField[] = ['name', 'email', 'city', 'province', 'about'];

export const aboutMaxLength = 2000;
