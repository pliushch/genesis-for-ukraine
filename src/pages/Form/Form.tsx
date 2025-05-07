import React, { useState } from 'react';
import styles from './Form.module.scss';
import Title from 'src/components/Title';
import Input from 'src/components/Input';
import Radio from 'src/components/Radio';
import TextArea from 'src/components/TextArea';
import useServices from 'src/hooks/useServices';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { ROUTES } from 'src/constants';
import { isEmailValid } from 'src/utils/validation';
import Select from 'src/components/Select';
import Button from 'src/components/Button';

const Form = () => {
  const navigation = useNavigate();
  const { purchaseService } = useServices();

  const [additionalInfo, setAdditionalInfo] = useState('ні');

  const [info, setInfo] = useState<{
    receiver_type: string;
    type: string;
    files: string[];
    // documents: string[];
  }>({
    receiver_type: 'співробітники',
    type: 'медичне призначення',
    files: [],
    // documents: [],
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = await purchaseService.uploadFiles(e.target.files as unknown as File[]);

    const files = data.map(({ url }) => url);

    if (e.target.id === 'documents') {
      await setInfo((prev) => ({
        ...prev,
        documents: files,
      }));

      return;
    }

    await setInfo((prev) => ({
      ...prev,
      files,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.currentTarget;
    setInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = async (values: Record<string, any>) => {
    const data = {
      type: info.receiver_type,
      description: values.description,
      contacts: values.contacts,
      files: info.files,
      issuer: {
        name: values.name,
        email: values.email,
        project: values.project,
        phone_number: values.phone_number,
        telegram_id: values.telegram_id,
      },
      receiver: {
        type: info.receiver_type,
        name: values.receiver_name,
        contacts: values.contact,
        location: values.location,
        unit: values.unit,
      },
    };
    const { success } = await purchaseService.helps(data);
    if (success) {
      navigation(ROUTES.SUCCESS);
    } else {
      navigation(ROUTES.FAILED);
    }
  };

  const { getFieldProps, errors, touched, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      name: '',
      project: '',
      email: '',
      phone_number: '',
      telegram_id: '',
      receiver_type: 'співробітники',
      receiver_name: '',
      contact: '',
      location: '',
      unit: '',
      type: 'медичне призначення',
      description: '',
      contacts: '',
      comment: '',
    },
    validate: async ({
      name,
      project,
      email,
      phone_number,
      telegram_id,
      receiver_name,
      contact,
      location,
      unit,
    }) => {
      const err = {};

      if (!name) {
        Object.assign(err, { name: "Обов'язкове поле" });
      }

      if (!project) {
        Object.assign(err, { project: "Обов'язкове поле" });
      }

      if (!email) {
        Object.assign(err, { email: "Обов'язкове поле" });
      }

      if (!isEmailValid(email)) {
        Object.assign(err, { email: 'Введіть, будь ласка, валідну пошту' });
      }

      if (!phone_number) {
        Object.assign(err, { phone_number: "Обов'язкове поле" });
      }

      if (!telegram_id) {
        Object.assign(err, { telegram_id: "Обов'язкове поле" });
      }

      if (!receiver_name) {
        Object.assign(err, { receiver_name: "Обов'язкове поле" });
      }
      if (!contact) {
        Object.assign(err, { contact: "Обов'язкове поле" });
      }
      if (!location) {
        Object.assign(err, { location: "Обов'язкове поле" });
      }
      if (!unit) {
        Object.assign(err, { unit: "Обов'язкове поле" });
      }

      return err;
    },
    onSubmit: (submitValues) => {
      handleFormSubmit(submitValues);
    },
  });

  const nameError = touched.name && !!errors.name ? errors.name : '';
  const projectError = touched.project && !!errors.project ? errors.project : '';
  const emailError = touched.email && !!errors.email ? errors.email : '';
  const phoneNumberError = touched.phone_number && !!errors.phone_number ? errors.phone_number : '';
  const telegramIdError = touched.telegram_id && !!errors.telegram_id ? errors.telegram_id : '';
  const receiverNameError =
    touched.receiver_name && !!errors.receiver_name ? errors.receiver_name : '';
  const contactError = touched.contact && !!errors.contact ? errors.contact : '';
  const locationError = touched.location && !!errors.location ? errors.location : '';
  const unitError = touched.unit && !!errors.unit ? errors.unit : '';

  const err =
    nameError ||
    projectError ||
    emailError ||
    phoneNumberError ||
    telegramIdError ||
    receiverNameError ||
    contactError ||
    locationError;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Title className={styles.title}>Заявка на отримання допомоги</Title>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Title className={styles.subtitle}>Інформація про заявника</Title>
          <div className={styles.inputsWrapper}>
            <Input
              wrapperClassName={styles.input}
              {...getFieldProps('name')}
              error={!!nameError}
              errorText={nameError}
              label="Прізвище та ім’я"
              placeholder="Необхідно заповнити"
            />
            <Input
              wrapperClassName={styles.input}
              {...getFieldProps('project')}
              error={!!projectError}
              errorText={projectError}
              label="Проєкт"
              placeholder="Необхідно заповнити"
            />
            <Input
              wrapperClassName={styles.input}
              {...getFieldProps('email')}
              error={!!emailError}
              errorText={emailError}
              label="Електронна адреса"
              placeholder="Необхідно заповнити"
            />
            <Input
              wrapperClassName={styles.input}
              {...getFieldProps('phone_number')}
              error={!!phoneNumberError}
              errorText={phoneNumberError}
              label="Номер телефону"
              type="number"
              placeholder="Необхідно заповнити"
            />
            <Input
              wrapperClassName={styles.input}
              {...getFieldProps('telegram_id')}
              error={!!telegramIdError}
              errorText={telegramIdError}
              label="Логін в Telegram для швидкого зв’язку"
              placeholder="Необхідно заповнити"
            />
          </div>
          <div className={styles.form}>
            <Title className={styles.subtitle}>Інформація про особу, яка потребує допомоги</Title>
            <div className={styles.radioWrapper}>
              <p className={styles.text}>Кому потрібна допомога?</p>
              <Radio
                label="Співробітники"
                id="staff"
                name="receiver_type"
                value="співробітники"
                onChange={handleChange}
                checked={info.receiver_type === 'співробітники'}
                className={styles.radio}
              />
              <Radio
                label="Близькі родичі (чоловік, дружина, партнер/партнерка, батьки, діти)"
                id="family"
                name="receiver_type"
                value="близькі родичі"
                onChange={handleChange}
                checked={info.receiver_type === 'близькі родичі'}
                className={styles.radio}
              />
              <Radio
                label="Близькі люди (родичі, друзі)"
                id="friends"
                name="receiver_type"
                value="близькі люди"
                onChange={handleChange}
                checked={info.receiver_type === 'близькі люди'}
              />
            </div>
            <div className={styles.inputsWrapper}>
              <Input
                wrapperClassName={styles.input}
                label="Прізвище та ім’я"
                placeholder="Необхідно заповнити"
                {...getFieldProps('receiver_name')}
                error={!!receiverNameError}
                errorText={receiverNameError}
              />
              <Input
                wrapperClassName={styles.input}
                label="Контакт для зв’язку"
                placeholder="Необхідно заповнити"
                {...getFieldProps('contact')}
                error={!!contactError}
                errorText={contactError}
              />
              <Input
                wrapperClassName={styles.input}
                label="Місцезнаходження (місто або область)"
                placeholder="Необхідно заповнити"
                {...getFieldProps('location')}
                error={!!locationError}
                errorText={locationError}
              />
              <Input
                wrapperClassName={styles.input}
                label="Номер військової частини/Назва установи-благоотримувача"
                placeholder="Необхідно заповнити"
                {...getFieldProps('unit')}
                error={!!unitError}
                errorText={unitError}
              />
            </div>
          </div>
          <div className={styles.formBottom}>
            <Title className={styles.subtitle}>Яка допомога потрібна?</Title>
            <p className={styles.subtext}>
              Вкажіть назву речі, розмір, кількість, критичні та некритичні характеристики, посилання того, що потрібно, бажані часові рамки доставки
            </p>
            <TextArea placeholder="Необхідно заповнити" {...getFieldProps('description')} />
          </div>
          <Button
            disabled={isSubmitting}
            type="submit"
            variant="secondary"
            className={styles.button}
          >
            Відправити заявку
          </Button>
          {err && <p className={styles.error}>Заповніть всі обов'язкові поля</p>}
        </form>
      </div>
    </div>
  );
};

export default Form;
