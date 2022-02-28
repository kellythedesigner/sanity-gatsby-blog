export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "621d0955323eb472818dcc63",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-127iyto1",
                  apiId: "1b616a66-fbfa-4bbf-aaae-6fa5f556d3de",
                },
                {
                  buildHookId: "621d095555eda77706127dc8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ag73i69e",
                  apiId: "03123f59-31f9-4b21-b07d-e6ebd97a7ebe",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kellythedesigner/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ag73i69e.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
