"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useMailprex = ({ url, webName, emailDestiny, formToken, }) => {
    const [formData, setFormData] = (0, react_1.useState)({
        fullname: "",
        email: "",
        message: "",
        phone: "",
        service: "",
    });
    const [response, setResponse] = (0, react_1.useState)({
        data: null,
        loading: false,
        error: null,
    });
    const handleChange = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        try {
            setResponse(Object.assign(Object.assign({}, response), { loading: true }));
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Object.assign(Object.assign({}, formData), { webName, emailDestiny, formToken })),
            };
            const res = yield fetch(url, options);
            const data = yield res.json();
            setResponse(Object.assign(Object.assign({}, response), { data, loading: false }));
        }
        catch (error) {
            setResponse(Object.assign(Object.assign({}, response), { error, loading: false }));
        }
    });
    return { formData, handleChange, handleSubmit, response };
};
exports.default = useMailprex;
