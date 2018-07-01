
/**
 * 后台请求
 */
import Vue from "vue";
class Server extends Vue {
    // 获取项目状态
    public async getProjectStatus_async(): Promise<any> {
        return await this.$axios.get(`/project/status`);
    }
}

export default new Server()