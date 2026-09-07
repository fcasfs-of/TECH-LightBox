window.getDocData = function() {
    return {
        pt: {
            demoUrl: "/",
            title: "Lightbox - Conteúdos Diversos",
            subtitle: "Documentação Técnica",
            versionLabel: "Versão: ",
            playerLabel: "Player Embutido: ",
            playerValue: "Versão Mais Recente",
            btnText: "Ver Funcionando",
            sectionTitle: "Documentação em Português",
            sectionDesc: "Esta página descreve o funcionamento do componente Lightbox para exibição de conteúdos diversos de forma responsiva em qualquer dispositivo.",
            sectionInit: "Para inicializar o componente, utilize a função global fsmodal_open(config) passando as opções estruturadas no formato de objeto abaixo:",
            legendGlobal: "Parâmetros Globais e Callbacks (content.config)",
            legendTypes: "Configuração de Tipos dentro de content.config",
            legendContext: "Estruturas de Dados Aceitas em content.context",
            legendOther: "content (Outros Parâmetros de Entrada)",
            base: [
                ['id', 'String com o ID do elemento contêiner onde o modal será inserido.'],
                ['scroll_hide', 'Se definido como "yes", oculta a barra de rolagem da página quando ativo.'],
                ['noclose', 'Se for true, esconde o botão de fechar e bloqueia o encerramento do modal.'],
                ['click_close', 'Se for true, fecha o lightbox ao clicar fora da área do conteúdo principal.'],
                ['remove_effect', 'Se definido como true, desativa as animações visuais de transição.'],
                ['size', 'String contendo apenas números (ex: "800") que define a largura máxima em pixels.'],
                ['BG_Blur', 'String contendo apenas números que define a intensidade do efeito de desfoque de fundo (ex: "8").'],
                ['BG_Opacity', 'String contendo apenas números decimais que define a opacidade de fundo do modal (ex: "0.9").'],
                ['tiptext', 'Opcional. String contendo um texto explicativo ou dica rápida associada à chamada do componente.'],
                ['include', 'Objeto contendo configurações adicionais, como { player: "yes" } para embutir o reprodutor de mídia.'],
                ['content', 'Objeto principal contendo as propriedades tratadas pela biblioteca.']
            ],
            global: [
                ['lang', 'Define o idioma da interface interna do componente, aceitando "pt" ou "en".'],
                ['onClose', 'Função de callback acionada no encerramento e remoção do lightbox.'],
                ['onOpen', 'Função de callback acionada na abertura e renderização do lightbox.'],
                ['onPlayer', 'Função de callback acionada quando o player de mídia interno realiza ações estruturais.']
            ],
            types: [
                ['Configuração para tipo: "texto"', 'Suporta as chaves de estilização direta: italic, negrito, upper, lower (booleanos), fontSize (número), color (string), textAlign (string).'],
                ['Configuração para tipo: "list"', 'Suporta as chaves de formatação estrutural: posicao, alinhamento, tema, marcador (strings), arredondado (número), divisor (booleano).'],
                ['Configuração para tipo: "table"', 'Suporta as chaves de layout tabular: showIndex, zebra, headerBold (booleanos), align, headerAlign (strings), model (string com chaves de colunas separadas por vírgula).'],
                ['Configuração para tipo: "playlist"', 'Suporta as chaves de controle de faixas: tema (string), exibirIndex (booleano).'],
                ['Configuração para tipo: "carrossel"', 'Suporta as chaves de controle do slider de mídia: tema, transicao, posicaoDots, estiloDots (strings), intervalo (número), exibirControles, exibirDots, autoPlay (booleanos).'],
                ['Configuração para tipo: "grafico"', 'Suporta as chaves de renderização estatística: tema, orientacao, modelo (strings), exibirValores, exibirTooltips (booleanos), larguraBarra, raioCurva (números).'],
                ['Configuração para tipo: "pdf"', 'Suporta o controle de foco do documento: page (número).'],
                ['Configuração para tipo: "image"', 'Suporta o controle de ampliação visual: scale (booleano).'],
                ['Configuração para tipo: "svg"', 'Suporta o controle de cor de vetores inline: fill, stroke (strings).'],
                ['Configuração para tipos: "audio" / "video" / "PList"', 'Suporta a parametrização completa de players de mídia: colorText, colorIcon, OSD_Pos, pos_time (strings), OSD_Lang ("pt"/"en"), OSD_Theme ("light"/"dark"), volume (número decimal), OSD_Time (número em ms), OSD, autoplay, mute, contextmenu, nocontrols (booleanos). Se OSD for true, suporta a propriedade OSD_Events (opcional) que aceita uma lista/array contendo eventos como: "exitfullscreen", "fullscreen", "end", "finish", "volume", "seek", "userseek", "unmute", "mute", "pause", "stop", "play", "speed", "previous", "next".'],
                ['Configuração Exclusiva para tipo: "PList"', 'Suporta adicionalmente a propriedade: select (string contendo apenas o número do item ativo da lista de reprodução).']
            ],
            context: [
                ['Carrossel', '[ { url: "", legenda: "" } ]'],
                ['Playlist', '[ { titulo: "", subtitulo: "", thumbnail: "", href: "" } ]'],
                ['texto', 'string do texto normal'],
                ['Tabela', '[] dentro um objeto com keys e valores'],
                ['Lista', '[]'],
                ['audio', 'link'],
                ['link', 'url do site'],
                ['video', 'link'],
                ['pdf', 'url do arquivo'],
                ['image', 'link'],
                ['svg', 'string do svg'],
                ['grafico', '[ { label: "", valor: (number) } ]'],
                ['PList', '[ {"file":"","title":"","poster":""} ]']
            ],
            other: [
                ['title', 'String com o título que será exibido no topo do modal.'],
                ['type', 'Tipo do formato tratado (list, table, playlist, carrossel, grafico, pdf, link, texto, image, svg, audio, video, PList).'],
                ['poster', 'URL da imagem de capa utilizada caso o tipo do conteúdo seja vídeo.'],
                ['description', 'Texto descritivo opcional posicionado junto ao bloco de conteúdo.']
            ]
        },
        en: {
            demoUrl: "/en",
            title: "Lightbox - Diverse Contents",
            subtitle: "Technical Documentation",
            versionLabel: "Version: ",
            playerLabel: "Embedded Player: ",
            playerValue: "Most Recent Version",
            btnText: "Live Demo",
            sectionTitle: "English Documentation",
            sectionDesc: "This page describes the behavior of the Lightbox component for displaying diverse content responsively across all devices.",
            sectionInit: "To initialize the component, call the global function fsmodal_open(config) by passing an object structured with the following configurations:",
            legendGlobal: "Global Properties and Callbacks (content.config)",
            legendTypes: "Type Configurations inside content.config",
            legendContext: "Accepted Data Layout Structures in content.context",
            legendOther: "content (Other Input Parameters)",
            base: [
                ['id', 'String representing the ID of the container element where the modal attaches.'],
                ['scroll_hide', 'If set to "yes", it hides the main page scrollbar when the modal is active.'],
                ['noclose', 'If true, removes the close button and locks user interactions to prevent closing.'],
                ['click_close', 'If true, closes the lightbox view when performing click pointer triggers outside core bounding layout contents.'],
                ['remove_effect', 'If true, disables the visual transition effect animations.'],
                ['size', 'String containing numbers only (e.g., "800") which sets the maximum container width in pixels.'],
                ['BG_Blur', 'String containing numbers only that defines the backdrop filter blur rendering strength (e.g., "8").'],
                ['BG_Opacity', 'String containing float numbers only that defines the backdrop container style opacity channel (e.g., "0.9").'],
                ['tiptext', 'Optional. String containing a tooltip phrase or helpful contextual instructions bound to the layout trigger.'],
                ['include', 'Object holding setup flags, like { player: "yes" } to append media rendering properties.'],
                ['content', 'Standard metadata wrapper object targeting libraries rendering pipeline.']
            ],
            global: [
                ['lang', 'Sets internal viewport translation dictionary mapping rules, accepting "pt" or "en".'],
                ['onClose', 'Callback function triggered upon termination and execution removal of the lightbox layout.'],
                ['onOpen', 'Callback function triggered upon viewport initialization and interface rendering of the lightbox layout.'],
                ['onPlayer', 'Callback function triggered when the underlying internal media engine issues state changes or structural updates.']
            ],
            types: [
                ['Configuration for type: "texto"', 'Properties: italic, negrito, upper, lower (booleans), fontSize (number), color (string), textAlign (string).'],
                ['Configuration for type: "list"', 'Properties: posicao, alinhamento, tema, marcador (strings), arredondado (number), divisor (boolean).'],
                ['Configuration for type: "table"', 'Properties: showIndex, zebra, headerBold (booleans), align, headerAlign (strings), model (comma-separated column target string).'],
                ['Configuration for type: "playlist"', 'Properties: tema (string), exibirIndex (boolean).'],
                ['Configuration for type: "carrossel"', 'Properties: tema, transicao, posicaoDots, estiloDots (strings), intervalo (number), exibirControles, exibirDots, autoPlay (booleans).'],
                ['Configuration for type: "grafico"', 'Properties: tema, orientacao, modelo (strings), exibirValores, exibirTooltips (boolean), larguraBarra, raioCurva (numbers).'],
                ['Configuration for type: "pdf"', 'Properties: page (number).'],
                ['Configuration for type: "image"', 'Properties: scale (boolean).'],
                ['Configuration for type: "svg"', 'Properties: fill, stroke (strings).'],
                ['Configuration for types: "audio" / "video" / "PList"', 'Properties: colorText, colorIcon, OSD_Pos, pos_time (strings), OSD_Lang ("pt"/"en"), OSD_Theme ("light"/"dark"), volume (float), OSD_Time (number in ms), OSD, autoplay, mute, contextmenu, nocontrols (booleans). If OSD is true, it supports the OSD_Events (optional) property which maps an array collection tracking media events like: "exitfullscreen", "fullscreen", "end", "finish", "volume", "seek", "userseek", "unmute", "mute", "pause", "stop", "play", "speed", "previous", "next".'],
                ['Exclusive Configuration for type: "PList"', 'Properties: select (string tracking sequential track execution option array index number).']
            ],
            context: [
                ['Carousel', '[ { url: "", legenda: "" } ]'],
                ['Playlist', '[ { titulo: "", subtitulo: "", thumbnail: "", href: "" } ]'],
                ['text', 'normal text string'],
                ['Table', '[] containing an object with keys and values'],
                ['List', '[]'],
                ['audio', 'link'],
                ['link', 'website URL'],
                ['video', 'link'],
                ['pdf', 'file URL'],
                ['image', 'link'],
                ['svg', 'svg string'],
                ['chart', '[ { label: "", valor: (number) } ]'],
                ['PList', '[ {"file":"","title":"","poster":""} ]']
            ],
            other: [
                ['title', 'String value rendering the headline text at the top of the header.'],
                ['type', 'Evaluated payload type (list, table, playlist, carrossel, grafico, pdf, link, texto, image, svg, audio, video, PList).'],
                ['poster', 'URL string targeting thumbnail posters required when mapping videos.'],
                ['description', 'Complementary description text aligned beneath or near the asset render block.']
            ]
        }
    };
};

