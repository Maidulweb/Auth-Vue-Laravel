import axios from "axios";
import { computed, reactive, ref } from "vue";
import router from "../router";

const state = reactive({
  authenticated: false,
  user: {},
});

export default function useAuth() {
  const errors = ref({});
  const getAuthenticate = computed(() => state.authenticated);
  const getUser = computed(() => state.user);
  const setAuthenticate = (authenticated) => {
    state.authenticated = authenticated;
  };

  const setUser = (user) => {
    state.user = user;
  };

  const attempt = async () => {
    try {
      let response = await axios.get("/api/user");
      setAuthenticate(true);
      setUser(response.data);
      return response;
    } catch (error) {
      setAuthenticate(false);
      setUser({});
    }
  };

  const login = async (credential) => {
    try {
      await axios.get("/sanctum/csrf-cookie");
      await axios.post("/login", credential);
      await attempt();
      await router.push("/home");
    } catch (e) {
      if (e.response.status === 422) {
        errors.value = e.response.data.errors;
      }
    }
  };
  const logout = async () => {
    await axios.post("/logout");
    setAuthenticate(false);
    setUser({});
    await router.push("/login");
  };

  return {
    login,
    getAuthenticate,
    getUser,
    attempt,
    errors,
    logout,
  };
}
