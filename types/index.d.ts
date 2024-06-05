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

declare function useMailprex(props: UseMailprexProps): {
  handleSubmit: (formData: any) => Promise<void>;
  response: ApiResponse<any>;
};

export default useMailprex;
