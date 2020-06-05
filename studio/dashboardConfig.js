export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ed99d10e0f2c938b9fd49d0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-95w7bpe2',
                  apiId: '4244ae20-fc2f-49d2-9d25-5997f5b03bbf'
                },
                {
                  buildHookId: '5ed99d10038f51565d065fbb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-z1gm8amg',
                  apiId: '170703db-84db-4767-8fc1-3a38a272e302'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/walteniobessa/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-z1gm8amg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
