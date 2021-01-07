export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff731eb94ef65290b6b566f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1v7psfc2',
                  apiId: '76c372bc-1f8f-4b7d-a394-4166bb29320a'
                },
                {
                  buildHookId: '5ff731ec3bfacf1af73048c7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-xpyv2f5t',
                  apiId: '419e486c-c34d-421d-a1ca-6680fce60bd6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/irendon1993/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-xpyv2f5t.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
