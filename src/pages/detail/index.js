import { 
  // StaticContext,
  Logo,
  Gif,
  useSingleGif,
  // useSEO,
  Helmet,
  Redirect
} from 'util/imports';

import './styles.css';

export const Detail = ({params}) => {
  const {gif, isLoading, isError} = useSingleGif({id: params.id});
  
  const title = gif ? gif.title : '';
  // useSEO({title: title, description: `Detail of ${title}`});

  // if(isLoading) return <Spinner />
  // if(isLoading) return <h3>Esta cargando ...</h3>

  if(isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando ...</title>
        </Helmet>
        <h3>Esta cargando ...</h3>
      </>
    );
  }

  if(isError) return <Redirect to='/404' />;
  if(!gif) return null;

  return <div className="details-page">
    <Helmet>
      <title>{title} || Giffy</title>
    </Helmet>
    <Logo />
    <div className="details-page-gif">
      <Gif {...gif} />
    </div>
  </div>;
};