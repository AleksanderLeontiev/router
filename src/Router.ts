class Router {
    protected onEnterList: List;

    protected onLeaveList: List;

    protected onBeforeEnterList: List;
    constructor() {
        this.onEnterList = [];
        this.onLeaveList = [];
        this.onBeforeEnterList = [];
    }
}
