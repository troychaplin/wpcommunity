'use server';

import { provinces } from '@/data/content';
import { defaultLocale, hasLocale } from '@/i18n/config';
import { dictionaryFor } from '@/i18n/dictionaries';
import { aboutMaxLength, groupFormFields } from './types';
import type { GroupFormState, GroupFormValues } from './types';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const provinceCodes = new Set(provinces.map((province) => province.code));

// The seam where a backend plugs in: an email, a CRM, a WordPress endpoint. Nothing is stored or
// logged yet.
async function deliverGroupSubmission(values: GroupFormValues): Promise<void> {
    void values;
}

export async function submitGroup(previous: GroupFormState, formData: FormData): Promise<GroupFormState> {
    const locale = String(formData.get('locale'));
    const { errors: messages } = dictionaryFor(hasLocale(locale) ? locale : defaultLocale).form;

    const values = Object.fromEntries(
        groupFormFields.map((field) => [field, String(formData.get(field) ?? '').trim()]),
    ) as GroupFormValues;

    const errors: GroupFormState['errors'] = {};

    if (!values.name) errors.name = messages.name;
    if (!emailPattern.test(values.email)) errors.email = messages.email;
    if (!values.city) errors.city = messages.city;
    if (!provinceCodes.has(values.province)) errors.province = messages.province;
    if (values.about.length > aboutMaxLength) errors.about = messages.about;

    if (Object.keys(errors).length > 0) {
        return { status: 'error', errors, values, attempt: previous.attempt + 1 };
    }

    await deliverGroupSubmission(values);

    return { status: 'success', errors: {}, values: {}, attempt: previous.attempt + 1 };
}
