/** @jsx jsx */

import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

import { useForm, useInput } from "formite-html";

import { PageProps } from "../types/site";

import { A, H1, H2, P, Theme } from "../theme";

import Button from "../components/button";
import Input from "../components/input";
import Layout from "../components/layout";
import Link from "../components/link";
import SEO from "../components/seo";

const nameRequired = (v: string) => {
    if (!v) {
        return "Name is required";
    }
};

const emailRegEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

const emailValid = (v: string) => {
    if (!v) {
        return "Email is required";
    }
    if (!emailRegEx.test(v)) {
        return "Not a valid email address";
    }
};

type Subscription = {
    name: string;
    email: string;
};

const handleSubmit = (values: Subscription) => {
    alert(`Test: Thank you '${values.name}' for subscribing. (Email address: '${values.email}')`);
};

const Home = ({ location }: PageProps) => {
    const { canSubmit, fields, Form, isDirty } = useForm({ name: "", email: "" }, handleSubmit);
    const theme = useTheme<Theme>();
    return (
        <Layout path={location.pathname}>
            <SEO title="Home" />
            <H1>Home page</H1>
            <P>Welcome</P>
            <P>
                <Link to={"/blog"}>Go to blog</Link>
            </P>
            <H2 css={{ color: theme.colors.secondaryText }}>Subscribe to newsletter</H2>
            <Form css={{ display: "flex", alignItems: "center", margin: theme.sizes.universalMargin, maxWidth: 640 }}>
                <Input
                    type="text"
                    placeholder="Name"
                    required={fields.name.touched}
                    {...useInput(fields.name, nameRequired)}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    required={fields.email.touched}
                    {...useInput(fields.email, emailValid)}
                />
                <Button type="submit" disabled={!(canSubmit && isDirty)} variant="primary">
                    Subscribe (Test)
                </Button>
            </Form>
            <P>
                <small>This is a demo site. Clicking the button does not subscribe to anything.</small>
            </P>
            <P>
                <small>
                    The form uses <A href="https://www.formite.org">Formite</A> (React Hook Form Library).
                </small>
            </P>
        </Layout>
    );
};

export default Home;
