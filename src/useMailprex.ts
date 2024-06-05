import { useState } from "react";

type ApiResponse<T> = {
  data: T | null;
  loading: boolean;
  error: any;
};

type UseMailprexProps = {
  url: string;
  webName: string;
  emailDestiny: string;
  formToken: string;
};

const useMailprex = ({
  url,
  webName,
  emailDestiny,
  formToken,
}: UseMailprexProps) => {
  const [response, setResponse] = useState<ApiResponse<any>>({
    data: null,
    loading: false,
    error: null,
  });

  const handleSubmit = async (formData: any) => {
    try {
      setResponse({ ...response, loading: true });
      const options: RequestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, webName, emailDestiny, formToken }),
      };
      const res = await fetch(url, options);
      const data = await res.json();
      setResponse({ ...response, data, loading: false });
    } catch (error) {
      setResponse({ ...response, error, loading: false });
    }
  };

  return { handleSubmit, response };
};

export default useMailprex;
