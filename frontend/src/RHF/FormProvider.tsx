import PropTypes from 'prop-types';
import { FormProvider as Form } from 'react-hook-form';

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
  methods: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FormProvider({ children, onSubmit, methods }: any) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
