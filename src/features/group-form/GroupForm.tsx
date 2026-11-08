'use client';

import { useActionState, useEffect, useRef } from 'react';
import { Button } from '@/components/Button';
import { Fieldset } from '@/components/Fieldset';
import { FlexGroup } from '@/components/FlexGroup';
import { GridGroup } from '@/components/GridGroup';
import { Heading } from '@/components/Heading';
import { Select } from '@/components/Select';
import type { SelectOption } from '@/components/Select';
import { TextArea } from '@/components/TextArea';
import { TextField } from '@/components/TextField';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import { submitGroup } from './submitGroup';
import { aboutMaxLength, groupFormFields, initialGroupFormState } from './types';

import './styles.scss';

export interface GroupFormProps {
    locale: Locale;
    labels: Dictionary['form'];
    provinces: SelectOption[];
}

export function GroupForm({ locale, labels, provinces }: GroupFormProps) {
    const [state, formAction, isPending] = useActionState(submitGroup, initialGroupFormState);
    const formRef = useRef<HTMLFormElement>(null);
    const successRef = useRef<HTMLDivElement>(null);
    const { errors, values } = state;

    // After a submission, move focus to the first field to fix, or to the thank-you message
    useEffect(() => {
        if (state.status === 'success') {
            successRef.current?.focus();
        } else if (state.status === 'error') {
            const field = groupFormFields.find((name) => errors[name]);
            const element = field && formRef.current?.elements.namedItem(field);

            if (element instanceof HTMLElement) {
                element.focus();
            }
        }
    }, [state, errors]);

    return (
        <div className="wpc-group-form">
            {state.status !== 'success' && (
                <form key={state.attempt} ref={formRef} action={formAction} noValidate>
                    <input type="hidden" name="locale" value={locale} />
                    <FlexGroup direction="column" gap="large">
                        <Fieldset legend={labels.yourDetails}>
                            <GridGroup columns={2}>
                                <TextField
                                    label={labels.name}
                                    name="name"
                                    placeholder={labels.namePlaceholder}
                                    autoComplete="name"
                                    required
                                    defaultValue={values.name}
                                    error={errors.name}
                                />
                                <TextField
                                    label={labels.email}
                                    name="email"
                                    type="email"
                                    placeholder={labels.emailPlaceholder}
                                    autoComplete="email"
                                    required
                                    defaultValue={values.email}
                                    error={errors.email}
                                />
                            </GridGroup>
                        </Fieldset>
                        <Fieldset legend={labels.groupDetails}>
                            <GridGroup columns={2}>
                                <TextField
                                    label={labels.city}
                                    name="city"
                                    placeholder={labels.cityPlaceholder}
                                    autoComplete="address-level2"
                                    required
                                    defaultValue={values.city}
                                    error={errors.city}
                                />
                                <Select
                                    label={labels.province}
                                    name="province"
                                    options={provinces}
                                    placeholder={labels.provincePlaceholder}
                                    required
                                    defaultValue={values.province ?? ''}
                                    error={errors.province}
                                />
                            </GridGroup>
                            <TextArea
                                label={labels.about}
                                name="about"
                                placeholder={labels.aboutPlaceholder}
                                maxLength={aboutMaxLength}
                                defaultValue={values.about}
                                error={errors.about}
                            />
                        </Fieldset>
                        <FlexGroup justify="space-between" align="center" gap="small">
                            <p>{labels.note}</p>
                            <Button
                                type="submit"
                                text={isPending ? labels.submitting : labels.submit}
                                disabled={isPending}
                            />
                        </FlexGroup>
                    </FlexGroup>
                </form>
            )}
            {/* One live region for both outcomes, so the summary and the thank-you are announced */}
            <div aria-live="polite">
                {state.status === 'error' && <p className="wpc-group-form__summary">{labels.errorSummary}</p>}
                {state.status === 'success' && (
                    <div ref={successRef} tabIndex={-1} className="wpc-group-form__success">
                        <Heading as="p" size="heading-small">
                            {labels.success.title}
                        </Heading>
                        <p>{labels.success.body}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
