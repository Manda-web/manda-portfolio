import React from 'react'

const Downloadcv = () => {
    const handleDownload = () => {
        // Créer un lien temporaire pour déclancher téléchargement
        const link = document.createElement('a');
        link.href = '/CV_ANDRIATSILEFITRA.pdf';
        link.download = 'CV-ANDRIATSILEFITRA-Sarobidy-Hery-Manda.pdf';  // Nom du fichier téléchargé
        link.click();
    }
  return (
    <section>
    <button onClick={handleDownload}  className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 btn-hover-effect">Download CV</button>
</section>
  )
}

export default Downloadcv