import { Button, Input, Stack, Text } from '@chakra-ui/react';
import { Form, useForm, connect } from 'formfusion';

const MyForm = () => {
  const config = useForm({
    onSubmit: (e) => {
      console.log('Success ' + JSON.stringify(e));
    },
    validateOnChange: true,
  });

  return (
    <Form config={config}>
      <Stack spacing={0}>
        <Input
          {...connect(config, 'alphabetic')}
          id="firstName"
          name="firstName"
          isInvalid={Boolean(config.errors.firstName)}
          errorBorderColor="crimson"
          placeholder="Enter your first name"
        />
        <Text fontSize="14px" color="tomato">
          {config.errors.firstName}
        </Text>
      </Stack>
      <Button colorScheme="blue" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
