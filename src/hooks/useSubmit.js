import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      await wait(2000);
      const random = Math.random();
      if (random < 0.5) throw new Error("Something went wrong");
      // نجاح
      return {
        type: 'success',
        message: `Thanks for your submission, ${data.firstName}!`,
      };
    } catch (error) {
      return {
        type: 'error',
        message: 'Something went wrong, please try again later!',
      };
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, submit };
};

export default useSubmit;
