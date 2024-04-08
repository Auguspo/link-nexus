import Papa from "papaparse";

type Link = {
  label: string;
  url: string;
};

const api = {
  links: {
    fetch: async () => {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTKe8HnGXjmK9hUPw8daXR-2lOm_gme5XmKA3--p7swK1a8RBjbknxkz1yk8LlcqMHF8xqyOyXNPiCN/pub?gid=0&output=csv",
      );

      const data = await res.text();
      const parsed = await new Promise<Link[]>((resolve, reject) => {
        Papa.parse<Link>(data, {
          header: true,
          complete: (result) => resolve(result.data),
          error: reject,
        });
      });

      console.log(parsed);
      return parsed;
    },
  },
};

export default api;
