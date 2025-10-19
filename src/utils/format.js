export function converterLinkYoutube(link) {
  try {
    const url = new URL(link);
    let videoId = '';

    // Caso seja um link do tipo youtu.be
    if (url.hostname === 'youtu.be') {
      videoId = url.pathname.slice(1);
    }

    // Caso seja um link completo do tipo youtube.com/watch?v=...
    else if (url.hostname.includes('youtube.com')) {
      videoId = url.searchParams.get('v');
    }

    if (!videoId) throw new Error('ID do vídeo não encontrado');

    const embedLink = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=1`;
    return embedLink;
  } catch (error) {
    console.error('Erro ao converter o link:', error.message);
    return null;
  }
}


export const formatDataLogin = (data) => {
  return {
    email: data.email || null,
    senha: data.password || null
  }
}