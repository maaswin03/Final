from flask import Flask, request,jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os

app = Flask(__name__)
CORS(app)

MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client.get_database("PROJECT")
collection = db.get_collection("Recieved_data")
collection1 = db.get_collection('Information')
collection2 = db.get_collection('Plant_information')


@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.json
    device_id = data.get('device_id')
    temperature = data.get('temperature')
    humidity = data.get('humidity')
    light_intensity = data.get('light_intensity')
    soil_moisture = data.get('soil_moisture')
    wind_speed = data.get('wind_speed')
    current_time = datetime.datetime.now()
    latitude = "11.0182575"
    longitude = "77.118899"

    previous_data = collection.find_one({'device_id': device_id})

    new_data = {
        'device_id': device_id,
        'latitude' : latitude,
        'longitude' : longitude
    }

    if previous_data:
        new_data['previous_temperature'] = previous_data.get('current_temperature')
        new_data['previous_humidity'] = previous_data.get('current_humidity')
        new_data['previous_light_intensity'] = previous_data.get('current_light_intensity')
        new_data['previous_soil_moisture'] = previous_data.get('current_soil_moisture')
        new_data['previous_wind_speed'] = previous_data.get('current_wind_speed')
        new_data['previous_time'] = previous_data.get('current_time')

        new_data['previous1_temperature'] = previous_data.get('previous_temperature')
        new_data['previous1_humidity'] = previous_data.get('previous_humidity')
        new_data['previous1_light_intensity'] = previous_data.get('previous_light_intensity')
        new_data['previous1_soil_moisture'] = previous_data.get('previous_soil_moisture')
        new_data['previous1_wind_speed'] = previous_data.get('previous_wind_speed')
        new_data['previous1_time'] = previous_data.get('previous_time')
        
        new_data['previous2_temperature'] = previous_data.get('previous1_temperature')
        new_data['previous2_humidity'] = previous_data.get('previous1_humidity')
        new_data['previous2_light_intensity'] = previous_data.get('previous1_light_intensity')
        new_data['previous2_soil_moisture'] = previous_data.get('previous1_soil_moisture')
        new_data['previous2_wind_speed'] = previous_data.get('previous1_wind_speed')
        new_data['previous2_time'] = previous_data.get('previous1_time')

        new_data['previous3_temperature'] = previous_data.get('previous2_temperature')
        new_data['previous3_humidity'] = previous_data.get('previous2_humidity')
        new_data['previous3_light_intensity'] = previous_data.get('previous2_light_intensity')
        new_data['previous3_soil_moisture'] = previous_data.get('previous2_soil_moisture')
        new_data['previous3_wind_speed'] = previous_data.get('previous2_wind_speed')
        new_data['previous3_time'] = previous_data.get('previous2_time')

        new_data['previous4_temperature'] = previous_data.get('previous3_temperature')
        new_data['previous4_humidity'] = previous_data.get('previous3_humidity')
        new_data['previous4_light_intensity'] = previous_data.get('previous3_light_intensity')
        new_data['previous4_soil_moisture'] = previous_data.get('previous3_soil_moisture')
        new_data['previous4_wind_speed'] = previous_data.get('previous3_wind_speed')
        new_data['previous4_time'] = previous_data.get('previous3_time')

    new_data['current_temperature'] = temperature
    new_data['current_humidity'] = humidity
    new_data['current_light_intensity'] = light_intensity
    new_data['current_soil_moisture'] = soil_moisture
    new_data['current_wind_speed'] = wind_speed
    new_data['current_time'] = current_time

    result = collection.update_one({'device_id': device_id}, {'$set': new_data}, upsert=True)

    if result.acknowledged:
        if result.upserted_id:
            print(f"Document inserted with ID: {result.upserted_id}")
            return f"Document inserted with ID: {result.upserted_id}"
        else:
            print(f"Document updated for device ID: {device_id}")
            return f"Document updated for device ID: {device_id}"
    else:
        print("Failed to insert or update document")
        return "Failed to insert or update document"


@app.route('/api/dashboard', methods=['GET'])
def data():
    if request.method == 'GET':
        device_id = 'ab01'
        if device_id:
            data = collection.find_one({"device_id": device_id})
            if data:
                return {"temperature": data["current_temperature"] ,"humidity": data["current_humidity"] , "light": data["current_light_intensity"] , "soil": data["current_soil_moisture"] , "speed": data["current_wind_speed"] , "time": data["current_time"] , "n": data["current_nitrogen"] , "p": data["current_phosphorus"], "k": data["current_potassium"],
                        "temperature1": data["previous_temperature"] ,"humidity1": data["previous_humidity"] , "light1": data["previous_light_intensity"] , "soil1": data["previous_soil_moisture"] , "speed1": data["previous_wind_speed"] , "time1": data["previous_time"] , "n1": data["previous_nitrogen"] , "p1": data["previous_phosphorus"] , "k1": data["previous_potassium"] ,
                        "temperature2": data["previous1_temperature"] ,"humidity2": data["previous1_humidity"] , "light2": data["previous1_light_intensity"] , "soil2": data["previous1_soil_moisture"] , "speed2": data["previous1_wind_speed"] , "time2": data["previous1_time"] , "n2": data["previous1_nitrogen"] , "p2": data["previous1_phosphorus"], "k2": data["previous1_potassium"] ,
                        "temperature3": data["previous2_temperature"] ,"humidity3": data["previous2_humidity"] , "light3": data["previous2_light_intensity"] , "soil3": data["previous2_soil_moisture"] , "speed3": data["previous2_wind_speed"] , "time3": data["previous2_time"] , "n3": data["previous2_nitrogen"] , "p3": data["previous2_phosphorus"] , "k3": data["previous2_potassium"] , 
                        "temperature4": data["previous3_temperature"] ,"humidity4": data["previous3_humidity"] , "light4": data["previous3_light_intensity"] , "soil4": data["previous3_soil_moisture"] , "speed4": data["previous3_wind_speed"] , "time4": data["previous3_time"] , "n4": data["previous3_nitrogen"] , "p4": data["previous3_phosphorus"] , "k4": data["previous3_potassium"] , 
                        "temperature5": data["previous4_temperature"] ,"humidity5": data["previous4_humidity"] , "light5": data["previous4_light_intensity"] , "soil5": data["previous4_soil_moisture"] , "speed5": data["previous4_wind_speed"] , "time5": data["previous4_time"] , "n5": data["previous4_nitrogen"] , "p5": data["previous4_phosphorus"] , "k5": data["previous4_potassium"] ,
                        "temperature6": data["previous5_temperature"] ,"humidity6": data["previous5_humidity"] , "light6": data["previous5_light_intensity"] , "soil6": data["previous5_soil_moisture"] , "speed6": data["previous5_wind_speed"] , "time6": data["previous5_time"] , "n6": data["previous5_nitrogen"] , "p6": data["previous5_phosphorus"] , "k6": data["previous_potassium"] ,
                        "latitude": data["latitude"] , "longitude": data["longitude"]}
            else:
                return {"message": "data not found for this device_id"}, 404
        else:
            return {"message": "Device_id parameter is missing"}, 400
    else:
        return "Method not allowed", 405
    

@app.route('/api/fieldbot', methods=['GET'])
def fieldbot():
    if request.method == 'GET':
        device_id = 'ab01'
        if device_id:
            data = collection.find_one({"device_id": device_id})
            if data:
                return {
                    "temperature": data["current_temperature"],
                    "humidity": data["current_humidity"],
                    "light": data["current_light_intensity"],
                    "soil": data["current_soil_moisture"],
                    "speed": data["current_wind_speed"],
                    "time": data["current_time"],
                    "n": data["current_nitrogen"],
                    "p": data["current_phosphorus"],
                    "k": data["current_potassium"],
                    "water_level": data["current_water_level"],  

                    "temperature1": data["previous_temperature"],
                    "humidity1": data["previous_humidity"],
                    "light1": data["previous_light_intensity"],
                    "soil1": data["previous_soil_moisture"],
                    "speed1": data["previous_wind_speed"],
                    "time1": data["previous_time"],
                    "n1": data["previous_nitrogen"],
                    "p1": data["previous_phosphorus"],
                    "k1": data["previous_potassium"],
                    "water_level1": data["previous_water_level"],  

                    "temperature2": data["previous1_temperature"],
                    "humidity2": data["previous1_humidity"],
                    "light2": data["previous1_light_intensity"],
                    "soil2": data["previous1_soil_moisture"],
                    "speed2": data["previous1_wind_speed"],
                    "time2": data["previous1_time"],
                    "n2": data["previous1_nitrogen"],
                    "p2": data["previous1_phosphorus"],
                    "k2": data["previous1_potassium"],
                    "water_level2": data["previous1_water_level"], 

                    "temperature3": data["previous2_temperature"],
                    "humidity3": data["previous2_humidity"],
                    "light3": data["previous2_light_intensity"],
                    "soil3": data["previous2_soil_moisture"],
                    "speed3": data["previous2_wind_speed"],
                    "time3": data["previous2_time"],
                    "n3": data["previous2_nitrogen"],
                    "p3": data["previous2_phosphorus"],
                    "k3": data["previous2_potassium"],
                    "water_level3": data["previous2_water_level"], 

                    "temperature4": data["previous3_temperature"],
                    "humidity4": data["previous3_humidity"],
                    "light4": data["previous3_light_intensity"],
                    "soil4": data["previous3_soil_moisture"],
                    "speed4": data["previous3_wind_speed"],
                    "time4": data["previous3_time"],
                    "n4": data["previous3_nitrogen"],
                    "p4": data["previous3_phosphorus"],
                    "k4": data["previous3_potassium"],
                    "water_level4": data["previous3_water_level"], 

                    "temperature5": data["previous4_temperature"],
                    "humidity5": data["previous4_humidity"],
                    "light5": data["previous4_light_intensity"],
                    "soil5": data["previous4_soil_moisture"],
                    "speed5": data["previous4_wind_speed"],
                    "time5": data["previous4_time"],
                    "n5": data["previous4_nitrogen"],
                    "p5": data["previous4_phosphorus"],
                    "k5": data["previous4_potassium"],
                    "water_level5": data["previous4_water_level"], 

                    "temperature6": data["previous5_temperature"],
                    "humidity6": data["previous5_humidity"],
                    "light6": data["previous5_light_intensity"],
                    "soil6": data["previous5_soil_moisture"],
                    "speed6": data["previous5_wind_speed"],
                    "time6": data["previous5_time"],
                    "n6": data["previous5_nitrogen"],
                    "p6": data["previous5_phosphorus"],
                    "k6": data["previous5_potassium"],
                    "water_level6": data["previous5_water_level"],

                    "latitude": data["latitude"],
                    "longitude": data["longitude"],
                    "fire": data["fire_status"],
                    "gas" : data["gas_status"],
                    "phvalue" : data["ph_value"],
                    "irrigation" : data["irrigation"],
                    "irrigationtime" : data["irrigation_time"]
                }
            else:
                return {"message": "data not found for this device_id"}, 404
        else:
            return {"message": "Device_id parameter is missing"}, 400
    else:
        return "Method not allowed", 405
    

@app.route('/api/cropdoctor', methods=['GET'])
def cropdoctor():
    if request.method == 'GET':
        device_id = 'ab01'
        if device_id:
            data = collection.find_one({"device_id": device_id})
            if data:
                return {
                    "temperature": data["current_temperature"],
                    "humidity": data["current_humidity"],
                    "light": data["current_light_intensity"],
                    "soil": data["current_soil_moisture"],
                    "speed": data["current_wind_speed"],
                    "time": data["current_time"],
                    "n": data["current_nitrogen"],
                    "p": data["current_phosphorus"],
                    "k": data["current_potassium"],
                    "water_level": data["current_water_level"],  

                    "temperature1": data["previous_temperature"],
                    "humidity1": data["previous_humidity"],
                    "light1": data["previous_light_intensity"],
                    "soil1": data["previous_soil_moisture"],
                    "speed1": data["previous_wind_speed"],
                    "time1": data["previous_time"],
                    "n1": data["previous_nitrogen"],
                    "p1": data["previous_phosphorus"],
                    "k1": data["previous_potassium"],
                    "water_level1": data["previous_water_level"], 
                    "latitude": data["latitude"],
                    "longitude": data["longitude"],
                    "fire": data["fire_status"],
                    "gas" : data["gas_status"],
                    "phvalue" : data["ph_value"],
                    "irrigation" : data["irrigation"],
                    "irrigationtime" : data["irrigation_time"]
                }
            else:
                return {"message": "data not found for this device_id"}, 404
        else:
            return {"message": "Device_id parameter is missing"}, 400
    else:
        return "Method not allowed", 405


@app.route('/api/data', methods=['GET'])
def get_data():
    data = list(collection2.find())
    for item in data:
        item['_id'] = str(item['_id'])
    return jsonify(data)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)