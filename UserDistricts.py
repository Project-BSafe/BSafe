import firebase_admin
from firebase_admin import credentials, firestore, db


cred = credentials.Certificate('D:/UCSC/IEEE WIE - covid/ServiceAccountKey.json')
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()

def main(chunk_size=None):
    
    doc_ref=db.collection("UserDistricts")
    docStream=doc_ref.stream()
    
    for doc in docStream:
        dic=doc.to_dict()
        #print(dic)
        #district=dic["district"]
        #caseCount=distDict[district]
        #print(u'{} => {}'.format(doc.id, doc.to_dict()))
        doc_ref2 = db.collection("UserDistricts").document(doc.id)
        doc_ref2.update({
            "Ampara": 0,
            "Anuradhapura":0,
            "Badulla":0,
            "Batticaloa":0,
            "Colombo":0,
            "Galle":0,
            "Gampaha":0,
            "Hambantota":0,
            "Jaffna":0,
            "Kalutara":0,
            "Kandy":0,
            "Kegalle":0,
            "Kilinochchi":0,
            "Kurunegala":0,
            "Mannar":0,
            "Matale":0,
            "Matara":0,
            "Monaragala":0,
            "Mullaittivu":0,
            "Nuwara_Eliya":0,
            "Polonnaruwa":0,
            "Puttalam":0,
            "Rathnapura":0,
            "Trincomalee":0,
            "Vavuniya":0
        })


main()