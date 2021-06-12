import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8' />
          <link rel='icon' href='/favicon.ico' />
          <meta name='keywords' content={keywords} />
          <meta name='description' content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
    );
  }

  Meta.defaultProps = {
    title: 'Bugit',
    keywords: 'issuetracker, issue, tracking',
    description: 'Keep track of your issues',
  }


export default Meta;