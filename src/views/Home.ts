import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Server from "../commonFun/Server";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  message: string = '我是主页'

  mounted() {
    //请求数据
    Server.getProjectStatus_async().then(res => {
      this.message = res;
    });
    console.log(process.env.NODE_ENV)
  }
}