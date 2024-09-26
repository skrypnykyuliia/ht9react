import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './DynamicForm.module.css';

const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };


  const firstInputValue = watch('firstInput', '');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="firstInput">First Field </label>
        <input
          id="firstInput"
          {...register('firstInput', { required: true, minLength: 5 })}
        />
        {errors.firstInput && errors.firstInput.type === 'required' && (
          <span className={styles.error}>This field is required</span>
        )}
        {errors.firstInput && errors.firstInput.type === 'minLength' && (
          <span className={styles.error}>Minimum lenght is 5 symbols</span>
        )}
      </div>

      {firstInputValue.length >= 5 && (
        <div className={styles.field}>
          <label htmlFor="secondInput">Second Field  </label>
          <input
            id="secondInput"
            {...register('secondInput', { required: true })}
          />
          {errors.secondInput && (
            <span className={styles.error}>This field is required</span>
          )}
        </div>
      )}

      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
};

export default DynamicForm;
