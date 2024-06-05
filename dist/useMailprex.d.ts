type FormData = {
    fullname: string;
    email: string;
    message: string;
    phone: string;
    service: string;
};
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
declare const useMailprex: ({ url, webName, emailDestiny, formToken, }: UseMailprexProps) => {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    response: ApiResponse<any>;
};
export default useMailprex;
