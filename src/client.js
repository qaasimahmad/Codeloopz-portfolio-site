import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const projectId = "6ohtqu7e";
const token =
  "skeSZw55J6vtPi7v7W6OItHZGgVWMKUkKWKIu0Pw5h0GvR8g7Cc6D42Cwab1chqJXEGk3ICAdKKvJz55aDh7QU3h14UlpRIHlk5LdFfESgnj49tTjipJrbZ05WWp68iaWqpgEmAgagsN9nDRk0rJvvqzCchnOEPqMndVGAiz2DM5ENcFM5vd";
// const token = import.meta.env.VITE_SANITY_APPLICATION_TOKEN;

export const client = createClient({
  projectId: projectId,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: token,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
