import userIcon from '@molecules/User/UserIcon.vue';
import vuetify from '@v-plugin/vuetify.js'
export default {
    title: 'Molecules/User/UserIcon',
    components: {userIcon},
    argTypes: {
        size: { control: { type: 'select', options: ['x-small','small','midium','large','x-large'] } },
        iconClick:{action:"iconClick"},
    },
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    vuetify,
    components: { userIcon },
    template: '<userIcon v-bind="$props" @iconClick="iconClick"/>',
});
export const UserIcon = Template.bind({});
UserIcon.args = {
    size:"midium",
    user:{
        id:1,
        name:"user",
        initials:'UR',
        email:"user@Itamaster.co.jp",
        color:"brown",
        simpleIcon:false,
        // bgImg:'',
        iconImg:{url:''},
        trialed:false,
    }
};