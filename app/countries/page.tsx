"use client"
import supabase from '../../lib/supabase';
import SortableTable from './SortableTable';

  export default async function Notes() {

    const { data: countries } = await supabase.from("Country").select('id, Name, Icon, SVG');
    const JSONData = JSON.stringify(countries);
    if(countries) return (
      <div>
      {countries ? (
        <SortableTable data={countries} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
    )
}