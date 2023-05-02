const blogUpdate = async (event) => {
    event.preventDefault();
    let id = "";
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    
    if(document.querySelector('#blog_id') && document.querySelector('#blog_id').value !== ""){
      id = document.querySelector('#blog_id').value.trim();
    }
    if(id === ""){
          if (title && content) {
              const response = await fetch('/dashboard', {
                  method: 'POST',
                  body: JSON.stringify({ title, content }),
                  headers: { 'Content-Type': 'application/json' },
              });
  
              if (response.ok) {
              document.location.replace('/dashboard');
              } else {
              alert('Failed to add Blog.');
              }
          }
    }else{
      if (id && title && content) {
          const response = await fetch('/dashboard/'+id, {
              method: 'PUT',
              body: JSON.stringify({title, content }),
              headers: { 'Content-Type': 'application/json' },
          });
  
          if (response.ok) {
          document.location.replace('/dashboard');
          } else {
          alert('Failed to update blog.');
          }
      }
    }
  };
  const blogDelete = async (event) => {
      event.preventDefault();
      let id = "";
      if(document.querySelector('#blog_id') && document.querySelector('#blog_id').value !== ""){
        id = document.querySelector('#blog_id').value.trim();
        const prompt1 = confirm("Do you want to delete the selected blog record?\nClick OK for Yes");
        if(!prompt1){return false;}
      }     
      if (id) {
          const response = await fetch('/dashboard/'+id, {
              method: 'DELETE',
              body: JSON.stringify({}),
              headers: { 'Content-Type': 'application/json' },
          });
  
          if (response.ok) {
          document.location.replace('/');
          } else {
          alert('Failed to delete blog.');
          }
      }
      
    };
  if(document.querySelector('#blog_delete')){
      document.querySelector('#blog_delete').addEventListener('click', blogDelete);
  }
  document
    .querySelector('#blog-form')
    .addEventListener('submit', blogUpdate);