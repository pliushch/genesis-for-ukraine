import React from 'react';
import styles from './Email.module.scss';
import Title from 'src/components/Title';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import arrow from 'src/assets/images/arrow-simple.svg'
import { FormikHelpers, useFormik } from 'formik';

export type EmailModalFormHelpers = FormikHelpers<{
  project: string;
}>;

export type EmailFormHelpers = FormikHelpers<{
  project: string;
}>;

type EmailProps = {
  onSubmit: (data: string, helpers: EmailFormHelpers | EmailModalFormHelpers) => void;
};

const Email = ({ onSubmit }: EmailProps) => {
  const { getFieldProps, errors, touched, handleSubmit } = useFormik({
    initialValues: {
      project: '',
    },
    validate: ({ project }) => {
      const err = {};

      if (!project) {
        Object.assign(err, { project: "Обов'язкове поле" });
      }

      return err;
    },
    onSubmit: (submitValues, helpers) => {
      onSubmit(submitValues.project, helpers);
    },
  });

  const errorProject = touched.project ? errors.project : '';

  return (
    <div className={styles.wrapper}>
      <img src={arrow} alt="arrow" className={styles.icon} width={40} height={40} />
      <Title className={styles.title}>Введіть назву свого проєкту</Title>
      <p className={styles.text} />
      <form onSubmit={handleSubmit}>
        <Input
          {...getFieldProps('project')}
          error={!!errorProject}
          errorText={errorProject}
          type="text"
          className={styles.input}
          placeholder="Назва проєкту"
        />
        <Button type="submit" className={styles.button} variant="secondary">
          Підтвердити
        </Button>
      </form>
    </div>
  );
};

export default Email;
