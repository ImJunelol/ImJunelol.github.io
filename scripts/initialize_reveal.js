Reveal.initialize({
    //view : 'scroll',
    jumpToSlide : true, 
    hash: true,
    slideNumber: true,
    katex : {
    version: "latest",
    delimiters : [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true },
    ]
    },
    plugins : [RevealHighlight, RevealNotes, RevealMarkdown, RevealZoom, RevealMath.KaTeX]
});