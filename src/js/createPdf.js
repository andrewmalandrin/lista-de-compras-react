import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

function createPdf(list){
    

    function createList(){
        
        var docList = list.map((item)=>{return {text:(item.alimento + ": " + item.quantidade), alignment:'left'}})
        console.log(docList)
        return docList

    }

    var fonts = {
        Roboto: {
            normal: 'fonts/Roboto-Regular.tff',
            bold: 'fonts/Roboto-Medium.tff',
            italic: 'fonts/Roboto-Italic.tff',
            bolditalics: 'fonts/Roboto-MediumItalic.tff'
        }
    }


    pdfMake.vfs = pdfFonts.pdfMake.vfs
    
    var newList = createList()

    console.log(newList.join(','))

    var docDefinition = {


        pageSize: 'A4',
        margin: [40,64,40,40],
       
        header: [
           {
                text:"Lista de Compras",
                fontsize: 16,
                alignment: 'center',
                margin: [0,16,0,40]
            },
                
        ],
       
        content: [
           
           {
               ul:[...newList
               ],
               alignment:'center',
               margin: [100,16,100,2]
           },
           
       ],

       defaultStyle: {
           alignment: 'center'
       }

       
    }
    
    pdfMake.createPdf(docDefinition).open()
    pdfMake.createPdf(docDefinition).download()

}



    


export default createPdf