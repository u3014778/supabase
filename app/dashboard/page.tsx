"use client"
import supabase from '../../lib/supabase';
import BarChart from './CountryBarChart';
  export default async function Notes() {
    //const supabase = await createClient();
    const { data: countries } = await supabase.from("Players").select('id, Name');
    const JSONData = JSON.stringify(countries);
    if(countries) return (
      <div>
      {countries ? (
        <BarChart
          labels={countries.map(item => item.Name)} // Adjust based on your data structure
          data={countries.map(item => item.id)}   // Adjust based on your data structure
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
    )
}