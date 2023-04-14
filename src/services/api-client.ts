import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "3a65d4033e6245b09f2f12c68c4d0dac"
    }
})

