declare const __ENV__: {
  KV: KVNamespace;
};
export const getEnv = () => {
  if (typeof window !== "undefined") {
    return {};
  }
  return __ENV__;
};
