const face1 ={
    face: {
        shapeForm: {
            shape: 'oval',
            width: 40,
            height: 70,
            position: horizontal
        },
        skinTone: 'European',
        borderRadius: 100
    },
    
    eyes: {
        left: {
            pupilColor: 'blue',
            eyeColor: 'white'
        },
        right: {
            pupilColor: 'blue',
            eyeColor: 'red'
        },
        shapeForm: {
            shape: 'circle',
            diameter: 4
    },

    ears: 'none',

    nose: {
        shapeForm: {
            shape: 'rectangle',
            width: 1,
            height: 3,
            position: vertical
        }
    },
    mouth: {
        shapeForm: {
            shape: 'oval',
            width: 5,
            height: 2,
            position: horizontal
        },
        teeth: 'none',
        color: 'black'
    },
    hair: {
        shapeForm: {
            shape: 'square',
            width: 5,
            height: 5,
            position: behindHead
        },
        facial: 'none',
        color: 'mustard'
    },
    misceleanous: {
        accessories: 'none',
        neck: 'none',
        eyeGap: veryClose,
        chin: 'none',
        eyebrow: 'none',
        eyelashes: 'none',
        shadow3D: [noseToFace, faceToHairAndCanvas, eyesToFace, mouthToFace]
    }


    // firstName: 'David',
    // lastName: 'Jones',
    // age: 22,
    // strengths: ['Music', 'Art'],
    //     exams: {
    //         midterm: 10,
    //         final: 9,
    //     }
}