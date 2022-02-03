import passwordField from '@molecules/User/PasswordField.vue';
import vuetify from '@v-plugin/vuetify.js'
export default {
    title: 'Molecules/User/PasswordField',
    components: {passwordField},
    argTypes: {
        passwordChanged:{action:"passwordChanged"},
    },
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    vuetify,
    components: { passwordField },
    template: '<passwordField v-bind="$props" @passwordChanged="passwordChanged"/>',
});
export const PasswordField = Template.bind({});
PasswordField.args = {
    inputPassword:"",
};