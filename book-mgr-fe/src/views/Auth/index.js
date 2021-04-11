import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons-vue";
import { defineComponent ,reactive } from "@vue/runtime-core";
import { auth } from '@/service';
export default defineComponent({
    components:{
        UserOutlined:UserOutlined,
        MailOutlined:MailOutlined,
        LockOutlined:LockOutlined,
    },
    setup(){

        const regForm=reactive({
            account:'',
            password:'',
        });

        const register=()=>{
            auth.register(regForm.account,regForm.password);
        };

        return{
            regForm,
            register,
        };
    },
});