import { registerService, useState, useLocation, useCallback, routes } from 'util/imports';
import { useForm } from 'react-hook-form';

export const Register = () => {
  const {handleSubmit, register, formState: { errors }} = useForm();
  const [registered, setRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, pushLocation] = useLocation(); // navigate

  const onSubmit = values => {
    setIsSubmitting(true);
    registerService(values)
      .then(() => {
        setRegistered(true);
        setIsSubmitting(false);
      });
  };

  const redirectToHome = useCallback(() => {
    setTimeout(() => {
      pushLocation(routes.home);
    }, 3000);
  }, [pushLocation]);

  if(registered) {
    return <div>
      <h4>
        <span role="img" aria-label="Check registered">
          Congratulations ✅! You&apos;ve been succesfully registered!
        </span>
      </h4>
      <p>Redirecting to home</p> 
      {redirectToHome()}
    </div>;
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={errors.username ? 'error' : ''}
          name="username"
          placeholder="Put here the username"
          {...register('username', { required: true })}
        />
        {errors.username?.type === 'required' && <small>
          Username is required
        </small>}

        <input
          className={errors.password ? 'error' : ''}
          name="password"
          placeholder="Put here the password"
          type='password'
          {...register('password', { required: true })}
        />
        {errors.password?.type === 'required' && <small>
          Password is required
        </small>}

        <button className="btn" disabled={isSubmitting}>
          Registrarse
        </button>
      </form>
    </>
  );
};

/* import { useForm, useFormState  } from "react-hook-form";

export const Register = () => {
  const {handleSubmit, register, control} = useForm({
    defaultValues: {
      username: null,
      password: null
    }
  });
  const [registered, setRegistered] = useState(false);

  const { dirtyFields, isSubmitting } = useFormState({control});

  const onSubmit = values => {
    // setIsSubmitting(true);
    registerService(values)
      .then(() => {
        setRegistered(true);
        // setIsSubmitting(false);
      });
  }

  if(registered) {
    return <h4>
      <span role="img" aria-label="Check registered">
        Congratulations ✅! You've been succesfully registered!
      </span>
    </h4>
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={!dirtyFields.username ? 'error' : ''}
          name="username"
          placeholder="Put here the username"
          {...register("username", { required: true })}
        />
        {!dirtyFields.username && <small>
          Username is required
        </small>}

        <input
          className={!dirtyFields.password ? 'error' : ''}
          name="password"
          placeholder="Put here the password"
          type='password'
          {...register("password", { required: true })}
        />
        {!dirtyFields.password && <small>
          Password is required
        </small>}

        <button className="btn" disabled={isSubmitting}>
          Registrarse
        </button>
      </form>
    </>
  );
}; */